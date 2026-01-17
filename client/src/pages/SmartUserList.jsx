import React, { useState, useEffect, useMemo } from 'react';

const SmartUserList = () => {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterInput, setFilterInput] = useState('');

  useEffect(() => {
    setLoading(true);
    const is = localStorage.getItem('users_data');
    const parseUsers = JSON.parse(is);

    if (is) {
      const JSONAllUser = JSON.parse(is);
      setAllUser(JSONAllUser);
      setLoading(false);
      return;
    }

    const fetchUsersData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        // body: JSON.stringify(data)
      })
      let result = await res.json();
      const users = result.map((user) => ({ ...user, status: 'active' }))
      localStorage.setItem('users_data', JSON.stringify(users))
      setAllUser(users);
      setLoading(false);
    }
    fetchUsersData();
  }, [])

  const handleToggle = (userID) => {
    const udpated = allUser.map((user) => {
      if (userID === user.id) {
        return {
          ...user,
          status: user.status === 'active' ? 'inactive' : 'active'
        }
      }
      return user;
    });
    setAllUser(udpated);
    localStorage.setItem('users_data', JSON.stringify(udpated));
  };

  useEffect(() => {
    localStorage.setItem('users_data', JSON.stringify(allUser));
  }, [allUser]);

  const filteredUser = useMemo(() => {
    if (!filterInput.trim()) return allUser;

    const search = filterInput.toLowerCase();
    return allUser.filter((user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search))
  }, [filterInput, allUser])

  return (
    <div className='bg-gray-900 text-amber-300 h-[39em]'>
      <h1 className='text-center pt-4'>All User list</h1>
      <input type="text" name="" id=""
        className='text-sm p-1 border-2 border-gray-500'
        placeholder='Search by name or email'
        onChange={(e) => setFilterInput(e.target.value)}
      />
      {
        loading ? <div>Loading....</div> : <Table allUser={filteredUser} handleToggle={handleToggle} />
      }
    </div>
  );
};

export default SmartUserList;

const Table = ({ allUser, handleToggle }) => {

  return (
    <div className="m-10">
      <table className="min-w-full border-2 border-gray-700 rounded-lg overflow-hidden p-4 m-4 bg-gray-950">
        <thead className='text-pink-800'>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold border-b border-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold border-b border-gray-700">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold border-b border-gray-700">
              Company Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold border-b border-gray-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {allUser.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                {user.name}
              </td>
              <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                {user.email}
              </td>
              <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                {user.company.name}
              </td>
              <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                <span
                  onClick={() => {
                    handleToggle(user.id)
                  }}
                  className={`${user.status === 'active' ? 'text-green-800' : 'text-red-700'} cursor-pointer`}
                >
                  {user.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}