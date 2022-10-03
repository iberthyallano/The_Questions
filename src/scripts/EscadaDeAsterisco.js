function escadaDeAsterisco(num){
    let result = "";
    for (let i = 1, j = num; i <= num; i++, j--) {
        result += (' '.repeat(j-1) + '*'.repeat(i) + "\n");
    }
    return result; 
}

module.exports = escadaDeAsterisco;