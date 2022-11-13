import service from './index'

const get = async () => {
    return await service.get('/v1/persons')
}

export default { get }
