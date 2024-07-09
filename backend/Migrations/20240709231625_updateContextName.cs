using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class updateContextName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItem_Cart_CartId",
                table: "CartItem");

            migrationBuilder.DropForeignKey(
                name: "FK_CartItem_Snack_SnackId",
                table: "CartItem");

            migrationBuilder.DropForeignKey(
                name: "FK_Sell_Snack_SnackId",
                table: "Sell");

            migrationBuilder.DropForeignKey(
                name: "FK_Stock_Snack_SnackId",
                table: "Stock");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Stock",
                table: "Stock");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Snack",
                table: "Snack");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sell",
                table: "Sell");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CartItem",
                table: "CartItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cart",
                table: "Cart");

            migrationBuilder.RenameTable(
                name: "Stock",
                newName: "Stocks");

            migrationBuilder.RenameTable(
                name: "Snack",
                newName: "Snacks");

            migrationBuilder.RenameTable(
                name: "Sell",
                newName: "Sells");

            migrationBuilder.RenameTable(
                name: "CartItem",
                newName: "CartItems");

            migrationBuilder.RenameTable(
                name: "Cart",
                newName: "Carts");

            migrationBuilder.RenameIndex(
                name: "IX_Stock_SnackId",
                table: "Stocks",
                newName: "IX_Stocks_SnackId");

            migrationBuilder.RenameIndex(
                name: "IX_Sell_SnackId",
                table: "Sells",
                newName: "IX_Sells_SnackId");

            migrationBuilder.RenameIndex(
                name: "IX_CartItem_SnackId",
                table: "CartItems",
                newName: "IX_CartItems_SnackId");

            migrationBuilder.RenameIndex(
                name: "IX_CartItem_CartId",
                table: "CartItems",
                newName: "IX_CartItems_CartId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Stocks",
                table: "Stocks",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Snacks",
                table: "Snacks",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sells",
                table: "Sells",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Carts",
                table: "Carts",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Carts_CartId",
                table: "CartItems",
                column: "CartId",
                principalTable: "Carts",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Snacks_SnackId",
                table: "CartItems",
                column: "SnackId",
                principalTable: "Snacks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sells_Snacks_SnackId",
                table: "Sells",
                column: "SnackId",
                principalTable: "Snacks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Stocks_Snacks_SnackId",
                table: "Stocks",
                column: "SnackId",
                principalTable: "Snacks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Carts_CartId",
                table: "CartItems");

            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Snacks_SnackId",
                table: "CartItems");

            migrationBuilder.DropForeignKey(
                name: "FK_Sells_Snacks_SnackId",
                table: "Sells");

            migrationBuilder.DropForeignKey(
                name: "FK_Stocks_Snacks_SnackId",
                table: "Stocks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Stocks",
                table: "Stocks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Snacks",
                table: "Snacks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sells",
                table: "Sells");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Carts",
                table: "Carts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems");

            migrationBuilder.RenameTable(
                name: "Stocks",
                newName: "Stock");

            migrationBuilder.RenameTable(
                name: "Snacks",
                newName: "Snack");

            migrationBuilder.RenameTable(
                name: "Sells",
                newName: "Sell");

            migrationBuilder.RenameTable(
                name: "Carts",
                newName: "Cart");

            migrationBuilder.RenameTable(
                name: "CartItems",
                newName: "CartItem");

            migrationBuilder.RenameIndex(
                name: "IX_Stocks_SnackId",
                table: "Stock",
                newName: "IX_Stock_SnackId");

            migrationBuilder.RenameIndex(
                name: "IX_Sells_SnackId",
                table: "Sell",
                newName: "IX_Sell_SnackId");

            migrationBuilder.RenameIndex(
                name: "IX_CartItems_SnackId",
                table: "CartItem",
                newName: "IX_CartItem_SnackId");

            migrationBuilder.RenameIndex(
                name: "IX_CartItems_CartId",
                table: "CartItem",
                newName: "IX_CartItem_CartId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Stock",
                table: "Stock",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Snack",
                table: "Snack",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sell",
                table: "Sell",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cart",
                table: "Cart",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartItem",
                table: "CartItem",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItem_Cart_CartId",
                table: "CartItem",
                column: "CartId",
                principalTable: "Cart",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItem_Snack_SnackId",
                table: "CartItem",
                column: "SnackId",
                principalTable: "Snack",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Sell_Snack_SnackId",
                table: "Sell",
                column: "SnackId",
                principalTable: "Snack",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Stock_Snack_SnackId",
                table: "Stock",
                column: "SnackId",
                principalTable: "Snack",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
