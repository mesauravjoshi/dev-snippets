const EventDelegation = () => {

  const handleClick = (event) => {
    const el = event.target.closest("[data-action]");
    // console.log(el);

    if (!el) return

    const { action, id } = event.target.dataset;
    console.log('Action: ', action, 'User id : ', id);
    // CAN PERFORM ANY ACTION HERE USING USER ID 
  }

  const handleMouseDown = (event) => {
    const el = event.target.closest("[data-action]");
    // console.log(el);

    if (!el) return

    const { action, id } = event.target.dataset;
    console.log('Action: ', action, 'User id : ', id);
    // CAN PERFORM ANY ACTION HERE USING USER ID 
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl shadow-lg">
        <h2 className="text-center text-lg font-semibold text-[#F5E8D8] py-4 border-b border-[#2A2A2A]">
          Event Delegation
        </h2>

        <div className="px-4 py-4" >
          <ul className="space-y-3" onClick={handleClick} onHover={handleMouseDown}>
            {users.map((user) => (
              <li
                data-action="print" data-id={user.id}
                key={user.id}
                className="p-3 rounded-lg bg-[#262626] border border-[#3A3A3A] text-[#F5E8D8] text-sm data-set cursor-pointer"
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDelegation;

const users = [
  {
    "id": 1,
    "name": "Jami"
  }, {
    "id": 2,
    "name": "Betteanne"
  }, {
    "id": 3,
    "name": "Becky"
  }, {
    "id": 4,
    "name": "Francesca"
  }, {
    "id": 5,
    "name": "Theresita"
  }, {
    "id": 6,
    "name": "Feliks"
  }, {
    "id": 7,
    "name": "Quillan"
  }, {
    "id": 8,
    "name": "Basilio"
  }
];
