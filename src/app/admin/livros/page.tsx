import './style.css';

export default function LivrosPage() {
    return (
        <>
            <div className="cabecalhoPage">
                <div className="descricao">
                    <h2 className="titlePage">Livros</h2>
                    <p className="descriptionPage">
                        Gerencie os livros cadastrados na biblioteca, edite suas informações
                        e inative os mesmos se necessário.
                    </p>
                </div>
                <div className="acao">
                    <a href="/livros/cadastrar">Cadastrar</a>
                </div>
            </div>
            <table cellPadding={10} cellSpacing={10}>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ano de Publicação</th>
                        <th>Gênero</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dom Casmurro</td>
                        <td>Machado de Assis</td>
                        <td>1899</td>
                        <td>Romance</td>
                        <td>
                            <a href="/livros/editar">Editar</a>
                            <a href="#">Inativar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>O Senhor dos Anéis</td>
                        <td>J. R. R. Tolkien</td>
                        <td>1954</td>
                        <td>Fantasia</td>
                        <td>
                            <a href="/livros/editar">Editar</a>
                            <a href="#">Inativar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Capitães da Areia</td>
                        <td>Jorge Amado</td>
                        <td>1937</td>
                        <td>Drama</td>
                        <td>
                            <a href="/livros/editar">Editar</a>
                            <a href="#">Inativar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1984</td>
                        <td>George Orwell</td>
                        <td>1949</td>
                        <td>Distopia</td>
                        <td>
                            <a href="/livros/editar">Editar</a>
                            <a href="#">Inativar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>A Hora da Estrela</td>
                        <td>Clarice Lispector</td>
                        <td>1977</td>
                        <td>Romance</td>
                        <td>
                            <a href="/livros/editar">Editar</a>
                            <a href="#">Inativar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
