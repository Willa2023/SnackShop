using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RefineCartMethod2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItem_Snack_SnackId",
                table: "CartItem");

            migrationBuilder.DropIndex(
                name: "IX_CartItem_SnackId",
                table: "CartItem");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Cart",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Cart",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.CreateIndex(
                name: "IX_CartItem_SnackId",
                table: "CartItem",
                column: "SnackId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItem_Snack_SnackId",
                table: "CartItem",
                column: "SnackId",
                principalTable: "Snack",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
