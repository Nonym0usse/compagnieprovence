/**
 * @Author: VELLA CYRIL <nonym0usse>
 * @Date:   2018-03-20T16:31:49+01:00
 * @Email:  contact@vella.fr
 * @Last modified by:   nonym0usse
 * @Last modified time: 2018-03-20T17:16:18+01:00
 */

 export class Savon {

   constructor(public id: number = null,
     public nom: string = "",
     public categorie: string = "",
     public image: string  = "",
     public format: number  = null,
     public prix: number  = null,
     public codeBarre: string = "",
     public senteur: string = "" ){

   }


 }
