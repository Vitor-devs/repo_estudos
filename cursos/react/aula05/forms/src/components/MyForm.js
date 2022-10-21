import './MyForm.css';
import { useState } from 'react'

const MyForm = ({ user }) => {
    //6 - Controlled inputs


    //3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [role, setRole] = useState(user ? user.role : '');
    const [bio, setBio] = useState(user ? user.bio : '');


    const handleName = (e) => {
        setName(e.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email, bio, role)
        //Validação

        //Envio

        //7 - Limpar form
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }


    return (
        <div>
            {/* 5 - Envio de formulário */}
            <form onSubmit={handleSubmit}>
                {/* 1 - Criação de form */}
                <div>
                    <h2>Form com label</h2>
                    <label>
                        <span>
                            Nome:
                        </span>
                    </label>
                    <input type="text" name="name" id="name" value={name} placeholder='Digite seu nome' onChange={handleName} />
                </div>
                <input type="submit" value="Envia ae" />
                {/* 2 - Form s/ label */}
                <div>
                    {/* 4 - Simplificando forms */}
                    <h2>Form sem label</h2>
                    <p>Email:</p>
                    <input type="email" value={email} placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                {/* 8 - Textarea */}
                <div>
                    <label>
                        <span>Bio:</span>
                    </label>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
                </div>
                {/* 9 - select */}
                <label>
                    <span>Função no Sistema</span>
                </label>
                <select name="role" onChange={(e)=>setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
                <input type="submit" value="Envie" />
            </form>
        </div>
    )
}

export default MyForm