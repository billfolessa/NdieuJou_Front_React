


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { login } from "../services/auth.service";
//import { AuthContext } from "../context/AuthContext";
//import API from "../services/api";

const schema = yup.object().shape({
  email: yup.string().email("Email invalide").required("Champ requis"),
  password: yup.string().min(6, "Min. 6 caractères").required("Champ requis"),
});

const Login:React.FC =()=>{
  //const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data:any) => {
    try {
       const response = await login(data.email,data.password);
       if(response){
            //login(response.data.token);
       }
       setError("Email ou mot de passe incorrect");
    } catch (err) {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Se connecter
          </button>
        </form>
      </div>

    </div>
  );
};

export default Login;
