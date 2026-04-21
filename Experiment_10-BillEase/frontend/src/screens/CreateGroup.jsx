import { useState, useEffect } from "react";
import useStore from "../store/useStore";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [memberInput, setMemberInput] = useState("");
  const [members, setMembers] = useState([]);

  const {
    groups,
    createGroup,
    deleteGroup,
    selectGroup,
    startEditGroup,
    updateGroup,
    editingGroupIndex,
    cancelEdit,
    fetchGroups,
  } = useStore();

  useEffect(() => {
    fetchGroups();
  }, []);

  const resetForm = () => {
    setGroupName("");
    setMembers([]);
    setMemberInput("");
  };

  const handleAddMember = () => {
    if (!memberInput.trim() || members.includes(memberInput)) return;
    setMembers([...members, memberInput]);
    setMemberInput("");
  };

  const handleCreateOrUpdate = async () => {
    if (!groupName || members.length === 0) return;

    if (editingGroupIndex !== null) {
      updateGroup({ name: groupName, members });
    } else {
      await createGroup({ name: groupName, members });
    }

    resetForm();
  };

  const handleCancel = () => {
    cancelEdit();
    resetForm();
  };

  const handleEditClick = (group, index) => {
    startEditGroup(index);
    setGroupName(group.name);
    setMembers(group.members);
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>👥 Create Group</h2>

      <div className="input-group">
        <input
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <input
          placeholder="Add Member"
          value={memberInput}
          onChange={(e) => setMemberInput(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddMember}>
          +
        </button>
      </div>

      <div className="members">
        {members.map((m, i) => (
          <div key={i} className="chip">
            {m}
            <span onClick={() => handleRemoveMember(i)}>×</span>
          </div>
        ))}
      </div>

      <button className="create-btn" onClick={handleCreateOrUpdate}>
        {editingGroupIndex !== null ? "Update Group" : "Create Group"}
      </button>

      {editingGroupIndex !== null && (
        <button
          onClick={handleCancel}
          style={{
            marginTop: "10px",
            background: "#ef4444",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Cancel Edit
        </button>
      )}

      <h3 style={{ marginTop: "25px" }}>Your Groups</h3>

      {groups.map((g, i) => (
        <div
          key={i}
          style={{
            background: "#f3f4f6",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span onClick={() => selectGroup(g)}>{g.name}</span>

          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => handleEditClick(g, i)}>✏️</button>
            <button onClick={() => deleteGroup(i)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateGroup;