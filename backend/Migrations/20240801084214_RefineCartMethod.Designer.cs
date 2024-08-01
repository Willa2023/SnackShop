﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend.Data;

#nullable disable

namespace backend.Migrations
{
    [DbContext(typeof(SnackShopContext))]
    [Migration("20240801084214_RefineCartMethod")]
    partial class RefineCartMethod
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.6");

            modelBuilder.Entity("backend.Models.Cart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Cart", (string)null);
                });

            modelBuilder.Entity("backend.Models.CartItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("CartId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Checked")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SnackId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("CartId");

                    b.HasIndex("SnackId");

                    b.ToTable("CartItem", (string)null);
                });

            modelBuilder.Entity("backend.Models.Sell", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SnackId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("StockId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("SnackId");

                    b.HasIndex("StockId");

                    b.ToTable("Sell", (string)null);
                });

            modelBuilder.Entity("backend.Models.Snack", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Brand")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("CostPrice")
                        .HasColumnType("TEXT");

                    b.Property<string>("Image")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("SellPrice")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Snack", (string)null);
                });

            modelBuilder.Entity("backend.Models.Stock", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("SnackId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SoldQuantity")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TotalStock")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("SnackId");

                    b.ToTable("Stock", (string)null);
                });

            modelBuilder.Entity("backend.Models.CartItem", b =>
                {
                    b.HasOne("backend.Models.Cart", null)
                        .WithMany("CartItems")
                        .HasForeignKey("CartId");

                    b.HasOne("backend.Models.Snack", "Snack")
                        .WithMany()
                        .HasForeignKey("SnackId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Snack");
                });

            modelBuilder.Entity("backend.Models.Sell", b =>
                {
                    b.HasOne("backend.Models.Snack", "Snack")
                        .WithMany()
                        .HasForeignKey("SnackId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("backend.Models.Stock", null)
                        .WithMany("Sells")
                        .HasForeignKey("StockId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Snack");
                });

            modelBuilder.Entity("backend.Models.Stock", b =>
                {
                    b.HasOne("backend.Models.Snack", "Snack")
                        .WithMany()
                        .HasForeignKey("SnackId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Snack");
                });

            modelBuilder.Entity("backend.Models.Cart", b =>
                {
                    b.Navigation("CartItems");
                });

            modelBuilder.Entity("backend.Models.Stock", b =>
                {
                    b.Navigation("Sells");
                });
#pragma warning restore 612, 618
        }
    }
}
