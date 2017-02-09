namespace VoceViuMeuVeiculo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Criacaotabelas : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Fotoes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(),
                        Veiculo_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Veiculoes", t => t.Veiculo_Id)
                .Index(t => t.Veiculo_Id);
            
            CreateTable(
                "dbo.Veiculoes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Placa = c.String(nullable: false),
                        Localizacao = c.String(),
                        Status = c.Boolean(nullable: false),
                        Facebook = c.String(),
                        Whatsapp = c.String(),
                        Descricao = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Fotoes", "Veiculo_Id", "dbo.Veiculoes");
            DropIndex("dbo.Fotoes", new[] { "Veiculo_Id" });
            DropTable("dbo.Veiculoes");
            DropTable("dbo.Fotoes");
        }
    }
}
