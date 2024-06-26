import AppError from"../../models/error";

class ErrorHandlerMiddleware {
    execute(err, req, res, next) {
        if(err) {
            if(err instanceof AppError) {
                return res.status(err.status).send({ mensagem: err.mensage })
            }
        }

        return res.status(500).send({ mensagem: 'Erro interno do servidor' })
    }
}

export const errorHandlerMiddleware = new ErrorHandlerMiddleware()