import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addFood} from "../../store/MenuSlice";
import {AppDispatch} from "../../store";

const Admin: React.FC = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState<ArrayBuffer | null | string | any>("")

    const dispatch = useDispatch<AppDispatch>();
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
        setPhoto(fileReader.result)
    }

    const handleChangePhoto = (e: React.ChangeEvent<any>) => {
        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newFood = {
            id: Date.now(),
            name,
            price: Number(price),
            photo: photo
        };
        dispatch(addFood(newFood));
        setName("");
        setPrice("");
    };


    return (
    <div id="todo">
        <div className='container'>
            <div className=' py-10'>

                <h1 className='text-center text-2xl text-blue-900'>Create Product</h1>

                <form className='flex items-start justify-around px-20 py-16' onSubmit={handleSubmit}>

                    <div className='flex w-[40%] flex-col items-start'>

                        <input type="file"
                               className='w-[135px] ml-12 mb-6'
                               onChange={handleChangePhoto}
                        />

                        <input
                            type="text"
                            placeholder='title'
                            className='border w-full  py-2 px-3 rounded  mb-6'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder='price'
                            className='border py-2 px-3 rounded w-full mb-6'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <button
                            type="submit"
                            className='w-[80px] py-2 px-3 bg-orange-400 rounded text-xl text-white'
                        >Create
                        </button>
                    </div>

                    <div>
                        {
                            photo ?
                                <div className='mr-20 border bg-amber-100 rounded'>
                                    <img src={photo} width={300} alt=""/>
                                    <h2 className='text-start text-xl text-black'>{name}</h2>
                                    <h3 className='text-start text-xl text-black text-bold'>{price}</h3>
                                </div>
                                :
                                <div>
                                    <h1>place for a photo</h1>
                                </div>
                        }
                    </div>
                </form>


            </div>

        </div>
    </div>
    );
};

export default Admin;
