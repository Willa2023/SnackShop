using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RenameSnackFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Snack",
                table: "Snack");

            migrationBuilder.RenameTable(
                name: "Snack",
                newName: "Snacks");

            migrationBuilder.RenameColumn(
                name: "sellPrice",
                table: "Snacks",
                newName: "SellPrice");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Snacks",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "costPrice",
                table: "Snacks",
                newName: "CostPrice");

            migrationBuilder.RenameColumn(
                name: "brand",
                table: "Snacks",
                newName: "Brand");

            migrationBuilder.RenameColumn(
                name: "snackId",
                table: "Snacks",
                newName: "Id");

            migrationBuilder.AlterColumn<decimal>(
                name: "SellPrice",
                table: "Snacks",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Snacks",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "CostPrice",
                table: "Snacks",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Snacks",
                table: "Snacks",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Snacks",
                table: "Snacks");

            migrationBuilder.RenameTable(
                name: "Snacks",
                newName: "Snack");

            migrationBuilder.RenameColumn(
                name: "SellPrice",
                table: "Snack",
                newName: "sellPrice");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Snack",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "CostPrice",
                table: "Snack",
                newName: "costPrice");

            migrationBuilder.RenameColumn(
                name: "Brand",
                table: "Snack",
                newName: "brand");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Snack",
                newName: "snackId");

            migrationBuilder.AlterColumn<decimal>(
                name: "sellPrice",
                table: "Snack",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "name",
                table: "Snack",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<decimal>(
                name: "costPrice",
                table: "Snack",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Snack",
                table: "Snack",
                column: "snackId");
        }
    }
}
