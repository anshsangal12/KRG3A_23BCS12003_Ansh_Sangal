<mxfile host="app.diagrams.net">

&nbsp; <diagram name="YouTube HLD">

&nbsp;   <mxGraphModel dx="1200" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1">

&nbsp;     <root>

&nbsp;       <mxCell id="0"/>

&nbsp;       <mxCell id="1" parent="0"/>



&nbsp;       <mxCell id="users" value="Users (Web / Mobile / Smart TV)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="400" y="20" width="220" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="lb" value="DNS / Load Balancer" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="420" y="110" width="180" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="cdn" value="CDN (Video Delivery)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="420" y="200" width="180" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="api" value="API Gateway" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="420" y="290" width="180" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="userService" value="User Service" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="100" y="400" width="150" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="videoService" value="Video Service" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="300" y="400" width="150" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="searchService" value="Search Service" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="500" y="400" width="150" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="recService" value="Recommendation Service" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="700" y="400" width="180" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="userDB" value="User Database" style="shape=cylinder;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="100" y="520" width="150" height="70" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="videoDB" value="Video Metadata DB" style="shape=cylinder;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="300" y="520" width="150" height="70" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="searchIndex" value="Search Index (ElasticSearch)" style="shape=cylinder;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="500" y="520" width="170" height="70" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="storage" value="Object Storage (Video Files / Thumbnails)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="300" y="630" width="220" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="processing" value="Video Processing Pipeline (Encoding / Transcoding)" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">

&nbsp;         <mxGeometry x="300" y="720" width="220" height="60" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <!-- Edges -->



&nbsp;       <mxCell id="e1" edge="1" parent="1" source="users" target="lb">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e2" edge="1" parent="1" source="lb" target="cdn">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e3" edge="1" parent="1" source="cdn" target="api">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e4" edge="1" parent="1" source="api" target="userService">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e5" edge="1" parent="1" source="api" target="videoService">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e6" edge="1" parent="1" source="api" target="searchService">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e7" edge="1" parent="1" source="api" target="recService">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e8" edge="1" parent="1" source="userService" target="userDB">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e9" edge="1" parent="1" source="videoService" target="videoDB">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e10" edge="1" parent="1" source="videoDB" target="storage">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;       <mxCell id="e11" edge="1" parent="1" source="storage" target="processing">

&nbsp;         <mxGeometry relative="1" as="geometry"/>

&nbsp;       </mxCell>



&nbsp;     </root>

&nbsp;   </mxGraphModel>

&nbsp; </diagram>

</mxfile>

