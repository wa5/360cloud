import React, { useEffect, useState } from 'react';

function Curd1() {
    var [data, setData] = useState([]);
    var [id, setId] = useState([]);
    var [name, setName] = useState([]);
    var [chocalate, setChocalate] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/students')
            .then((response) => response.json())
            .then((a) => {
                console.log(a);
                setData(a);
            });
    }, []);
    function insertdata() {
        console.log(id, name, chocalate);
        var items = { id, name, chocalate };
        fetch('http://localhost:3004/students', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(items)
        });
    }

    function select(selectedId) {
        console.log(selectedId);
        setId(data[selectedId - 1].id);
        setName(data[selectedId - 1].name);
        setChocalate(data[selectedId - 1].chocalate);
    }
    function update() {
        var items = { id, name, chocalate };
        fetch(`http://localhost:3004/students/${id}`, {
            method: 'put',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(items)
        });
    }
    var delitinddata = (deltingid) => {
        fetch(`http://localhost:3004/students/${deltingid}`, {
            method: 'delete'
        });
    };
    return (
        <>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CHOCALATE</th>
                </tr>
                {data.map((val) => (
                    <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.chocalate}</td>
                        <td>
                            <button
                                onClick={() => {
                                    select(val.id);
                                }}
                            >
                                edit
                            </button>
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    delitinddata(val.id);
                                }}
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>

            <br />

            <div>
                <h1>inserting value</h1>
                <label htmlFor="">id</label>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                <label htmlFor="">name</label>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor="">chocalate</label>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => {
                        setChocalate(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        insertdata();
                    }}
                >
                    click me{' '}
                </button>
            </div>

            <br />
            <div>
                <h1>editing</h1>

                <label htmlFor="">id</label>
                <input
                    type="text"
                    value={id}
                    name=""
                    id=""
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                />
                <label htmlFor="">name</label>
                <input
                    type="text"
                    value={name}
                    name=""
                    id=""
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label htmlFor="">chocalate</label>
                <input
                    type="text"
                    value={chocalate}
                    name=""
                    id=""
                    onChange={(e) => {
                        setChocalate(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        update();
                    }}
                >
                    onclic update
                </button>
            </div>
        </>
    );
}

export default Curd1;
