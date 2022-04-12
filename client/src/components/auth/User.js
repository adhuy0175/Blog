
import Button from 'react-bootstrap/Button'
import React from 'react';
import bootstrap from 'bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class Room extends React.Component {
    state = {
        room: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000`)
            .then(res => {
                const room = res.data;
                this.setState({ room });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="d-flex" width="50%">
                {this.state.room.map(room =>
                    <div class="container">
                        <table border="1" width="100%" height="50">
                            <tr>
                                <th>phòng</th>
                            </tr>
                            <tr>
                                <td><div class="card">
                                    <img width="300" height="300" src="https://static2.cafeland.vn/tindang/1615450907_07865237-3143-cho-thue-phong-tro-nha-tro-quan-thanh-xuan-gia-re.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body bg-dark">
                                        <h5 classa="card-title">Tên Phòng:{room.roomname}</h5>
                                        <p class="card-text">Số người: {room.capacity} người</p>
                                        <p class="card-text">Loại phòng: {room.kind}</p>
                                        <p class="card-text">Giá {room.price} vnd</p>
                                        <p class="card-text">Mô tả {room.description}</p>
                                        <p>    <Link to='/chitiet'><Button to='/chitiet' size='sm' className='ml-2'> Chọn phòng</Button></Link>
                                        </p>
                                    </div>
                                </div></td>

                            </tr>
                        </table>
                    </div>

                )}
            </div>
        )
    }
}
