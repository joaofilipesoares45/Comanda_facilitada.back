const path = require('path')
const fs = require('fs')


const errF = (err) => {
    if (err) {
        console.log(err);
    }else {
        return 'success'
    }
} 
module.exports = {
    
    read(arquivo) {
        const data = fs.readFileSync(path.resolve('./uploads/' + arquivo + '.json'), 'utf-8')
        return JSON.parse(data)
    },

    write(arquivo, data) {
        console.log('add: ', data);
        
        const list = this.read(arquivo)
        list.push(data)
        fs.writeFileSync(path.resolve('./uploads/' + arquivo + '.json'), JSON.stringify(list), errF)
        return list
    },

    update(arquivo, update) {
        console.log('update: ', update);
        
        const list = this.read(arquivo)
        list.forEach((element, index) => {
            const { id } = element
            if (id === update.id) {
                list[index] = update
            }
        });
        fs.writeFileSync(path.resolve('./uploads/' + arquivo + '.json'), JSON.stringify(list), errF)
        return list
    },
    
    delete (arquivo, element) {
        console.log('delete: ', element);

        const list = this.read(arquivo)
        list.forEach(({ id }, index) => {
            if (id === element.id) {
                list.splice(index, 1)
            }
        })
        fs.writeFileSync(path.resolve('./uploads/' + arquivo + '.json'), JSON.stringify(list), errF)
        return list
    }
}