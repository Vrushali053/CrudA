import React, { useState } from "react";
import './UserTable.css';

const UserTable = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", age: "" });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = formData;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, { ...formData }]);
    }
    setFormData({ firstName: "", lastName: "", age: "" });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
    setEditIndex(null);
  };

  const handleClear = () => {
    setFormData({ firstName: "", lastName: "", age: "" });
    setEditIndex(null);
  };

  return (
    <div className="user-table-container">
      <div className="user-form">
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" />
        <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" />
        <button onClick={handleSave} className="save">Save</button>
        <button onClick={handleClear} className="clear">Clear</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              {/* <td>{i + 1}</td> */}
              <td>{i + 1}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.age}</td>
              <td>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
