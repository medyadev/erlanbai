import {useState} from 'react';
import {useForm} from 'react-hook-form';
import api from "./api";
import './App.css'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// const useInput = (initialValue) => {
//     const [value, setValue] = useState(initialValue)
//     const [dirty, setDirty] = useState(false)
//
//     const onChange = (e) => {
//         setValue(e.target.value)
//     }
//     const blur = (e) => {
//         setDirty(true)
//     }
//     return {
//         value,
//         onChange,
//         blur
//     }
//
// }


// const toastify = (text) => {
//     toast(text)
// }
const App = () => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm();
    const [nameError, setNameError] = useState('емайл не может быть пустым')
    const [passwordError, setPasswordError] = useState('')
    const onSubmites = data => {
        api.post(`contact/0101`, {
            name: data.name,
            number: data.number,
        })
            .then((red) => {
                console.log(red.data)
                toast.success("Success!")
            })
            .catch((err) =>{
                toast.error('error')
            })
        reset()
    }

    return (
        <div className='App'>
            <form className='from' onSubmit={handleSubmit(onSubmites)}>
                <ToastContainer/>
                <h1>register</h1>
                <input className='email' name='name' type="text"
                       placeholder="Last name" {...register("name", {required: true})} />
                {errors.name && <div style={{color: 'red'}}>name не может быть пустым</div>}
                <input className='password' name='password' type="tel"
                       placeholder="Mobile number" {...register("number", {required: true})} />
                {errors.number && <div style={{color: "red"}}>номер не может быть пустым</div>}
                <button className='btn' type="submit">бас мени ещак</button>
            </form>
        </div>
    );
};
export default App;