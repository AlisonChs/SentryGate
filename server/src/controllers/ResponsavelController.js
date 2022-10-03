const Responsavel = require('../models/Responsavel');
const Aluno = require('../models/Aluno');

module.exports = {
    async index(req, res) {
        const responsaveis = await Responsavel.findAll();

        return res.json(responsaveis);
    },
    async store(req, res) {
        //Cria um parametro para a rota
        const { id_aluno } = req.params;

        //Recebe os valores do corpo do frontend
        const {
            nome,
            sobrenome,
            data_nasc,
            cpf,
            rg,
            tel } = req.body;

        //Procura o aluno por meio da chave primaria
        const aluno = await Aluno.findByPk(id_aluno);

        //Caso não ache o aluno envia uma mensagem de erro
        if (!aluno) {
            return res.status(400).json({ msg: 'Aluno inexistente ou não encontrado' });
        }

        //Cria os valores e os insere na tabela
        const [responsaveis] = await Responsavel.findOrCreate({
            where: {
                cpf,
            },
            defaults: {
                nome,
                sobrenome,
                data_nasc,
                cpf,
                rg,
                tel
            }
        });

        await responsaveis.addResponsavel(responsaveis);

        return res.json();
    }
}