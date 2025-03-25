

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import {register as registerService} from "../services/auth.service"
import UserData from "../model/UserData.model";

const schema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Champ requis"),
  password: yup.string().min(6, "Min. 6 caractères").required("Champ requis"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Champ requis"),
});

const Register:React.FC = () => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data:any) => {
    try {
        const response =  await registerService(data)
        if(response){
            setMessage("Inscription réussie ! Vous pouvez vous connecter.");
        }else{
            setMessage("Erreur lors de l'inscription.");
        }
     
    } catch (err) {
      setMessage("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Inscription</h2>
        {message && <p className="text-green-500 text-sm">{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input {...register("email")} className="w-full p-2 border rounded" />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Mot de passe</label>
            <input type="password" {...register("password")} className="w-full p-2 border rounded" />
            <p className="text-red-500 text-xs">{errors.password?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Confirmer mot de passe</label>
            <input type="password" {...register("confirmPassword")} className="w-full p-2 border rounded" />
            <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
