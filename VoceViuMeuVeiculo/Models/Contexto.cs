using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace VoceViuMeuVeiculo.Models
{
    public class Contexto : DbContext
    {
        public Contexto() : base("Contexto")
        {

        }

        public DbSet<Veiculo> Veiculos { get; set; }
        public DbSet<Foto> Fotos { get; set; }
    }
}