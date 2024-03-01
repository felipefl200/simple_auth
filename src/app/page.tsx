import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Conta = {
  autorizado: boolean;
  usuario: string | null;
};

export default async function Home() {
  const token = cookies().get("token")?.value;
  if (!token) redirect("/login");

  let conta: Conta = {
    autorizado: false,
    usuario: null,
  };

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (response.ok) {
    conta = await response.json();
  } else {
    redirect("/login");
  }

  return (
    <main>
      <div>
        <h2>Nome do usuário: {conta.usuario}</h2>
        <p>Status: {conta.autorizado ? "Autorizado" : "Não autorizado"}</p>
      </div>
    </main>
  );
}
