# NodeJs_assignment-2

<h2>Task : Inventory management system</h2>
<ul>
<li>Create rest API to insert following inventory data</li>
<ol>
<li>inventory name (string), inventory category (string), expiry time (date & time) -
optional, quantity, manufacturing time (date & time), inventory id (auto generated
id), inventory image</li>
<li>Convert date-time parameters into CST time if other timezone is provided</li>
<li>Show success response after successful insertion</li>
<li>Save inventory image in local file system and allow user to access it with absolute
path</li></ol>
<li>Store inventory data into MySQL database</li>
<li>Create rest API to search inventory data</li>
<ol>
<li>Search parameter can be inventory name or inventory category</li>
<li>In API response return inventory name, inventory category, is_expired (boolean
flag), expiry time, quantity, inventory id, inventory image path
</li>
<li>is_expired flag will be derived based on current time of request and expiry_time
value</li>
<li>User can provide other timezone as well with search query</li></ol>
<li>User can provide other timezone as well with search query</li>
<ol><li>Update inventory data in database based on inventory id
</li></ol>
<li>Create rest API to delete multiple inventories at a time</li>

</ul>
