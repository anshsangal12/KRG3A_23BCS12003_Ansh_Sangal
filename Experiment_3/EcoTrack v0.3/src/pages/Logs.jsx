import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logsActions";


const Logs = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.logs);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLogs());
        }
    }, [status, dispatch]);

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Daily Logs - redux</h2>
            <ul>
                {data.map((log) => (
                    <li key={log.id}>{log.activity}</li>
                ))}
            </ul>
            {status === 'loading' && <div>Loading...</div>}
        </div>
    );
}