import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z
    .object({
        name: z.string().min(1, { message: "nome é obrigatório" }),
        email: z.string().min(1, { message: "Email é obrigatorio" })
            .email({
                message: "Deve ser um e-mail válido",
            })
    })

type ValidationSchema = z.infer<typeof validationSchema>;

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

    return (
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                        htmlFor="firstName"
                    >
                        Name:
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-xs italic text-red-500 mt-2">
                            {errors.name?.message}
                        </p>
                    )}
                </div>

            </div>
            <div className="mb-4">
                <label
                    className=""
                    htmlFor="email"
                >
                    Email:
                </label>
                <input
                    className=""
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.email?.message}
                    </p>
                )}
            </div>
            <div className="mb-6 text-center">
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Novo usuário                </button>
            </div>

        </form>
    );
};

export default Form;