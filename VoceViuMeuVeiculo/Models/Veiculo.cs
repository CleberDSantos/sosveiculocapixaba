using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VoceViuMeuVeiculo.Models
{
    public class Veiculo
    {
        public int Id { get; set; }
        [Required]
        public string Placa { get; set; }
        public string Localizacao { get; set; }
        public ICollection<Foto> Fotos { get; set; }
        public bool Status { get; set; }
        public string Facebook { get; set; }
        public string Whatsapp { get; set; }
        public string Descricao { get; set; }
    }

    public class Foto {
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}