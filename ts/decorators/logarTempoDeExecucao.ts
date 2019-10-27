export function logarTempoDeExecucao() {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            // args sao os parametros passados no metodo cujo decorator eh usado

            console.log(`antes pelo metodo de nome ${key}, no contexto ${target}`)
            const retorno = metodoOriginal.apply(this, args)
            console.log(`depois ${args}`)
            //apply permite chamar esse metodo no contexto this com os parametros de args

            return retorno;
        }
    }
}