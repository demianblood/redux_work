import {useState} from "react";

export const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || loading) return;

        try {
            setLoading(true)
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder='title'
                   value={title}
                   onChange={({target: {value}}) => setTitle(value)}/>
            <br/>
            <br/>
            <input type="text"
                   placeholder='description'
                   value={description}
                   onChange={({target: {value}}) => setDescription(value)}/>
            <br/>
            <br/>
            <button type='submit' disabled={!title || !description || loading}>create todo</button>
        </form>
    )
}