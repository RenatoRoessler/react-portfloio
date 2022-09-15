import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Paper } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { FormInputText } from "../../components/form/FormInputText";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup
    .string()
    .email("Informe um email válido")
    .required("Informe um email"),
  nome: yup
    .string()
    .min(2, "Informe pelo menos 2 caracteres")
    .required("Informe o nome"),
  mensagem: yup
    .string()
    .min(2, "Informe pelo menos 2 caracteres")
    .required("Informe a mensagem"),
});

interface cadastroProps {
  email?: string;
  nome?: string;
  mensagem?: string;
}

export const Formulario = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<cadastroProps> = async (data) => {
    var templateParams = {
      email: data.email,
      name: data.nome,
      message: data.mensagem,
    };

    emailjs
      .send(
        "service_hjq2i5g",
        "template_l0re625",
        templateParams,
        "vojhg-K7BJ_0tckgx"
      )
      .then(
        function (response) {
          toast.success("Email enviado com sucesso!");
          reset();
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          toast.error("Erro ao enviar email");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="anexo-form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormInputText name="nome" label="Seu Nome" control={control} />
        </Grid>
        <Grid item xs={12}>
          <FormInputText name="email" label="Seu Email" control={control} />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            name="mensagem"
            label="Mensagem"
            multiline
            control={control}
            rows={6}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Enviar Email
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
