function validandoSenha(senha) {
   let caractereFaltantes = 0;

   if (senha.length < 6) {
      return (senha.length - 6) * -1;
   }

   if (!/[0-9]/.test(senha)) {
      caractereFaltantes++;
   }

   if (!/[a-z]/.test(senha)) {
      caractereFaltantes++;
   }

   if (!/[A-Z]/.test(senha)) {
      caractereFaltantes++;
   }

   if (!/([!,@,#,$,%,^,&,(,),+])/.test(senha)) {
      caractereFaltantes++;
   }

   return caractereFaltantes;
}

module.exports = validandoSenha;
