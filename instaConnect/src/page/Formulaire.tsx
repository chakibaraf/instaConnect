import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
    username: string;
    password: string;
};

const Formulaire: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data); // Vous pouvez traiter les données de connexion ici
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                        type="text"
                        id="username"
                        {...register('username', { required: 'Ce champ est requis' })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </div>

                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'Ce champ est requis' })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Formulaire;