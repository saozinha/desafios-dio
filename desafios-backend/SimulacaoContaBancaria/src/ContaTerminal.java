import java.math.BigDecimal;
import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("\n\n SIMULACAO CONTA BANCARIA - TERMINAL JAVA ");

        System.out.println("\n Por favor, digite o nome do Cliente : ");
        String cliente = sc.nextLine();

        System.out.println("Por favor, digite o numero da Agência  : ");
        String agencia = sc.nextLine();

        System.out.println("Por Favor, digite o numero da conta : ");
        int conta = sc.nextInt();

        System.out.println("Por favor, digite o saldo da conta : ");
        BigDecimal saldo = sc.nextBigDecimal();

        System.out.println("\nOlá [" + cliente + "], obrigado por criar uma conta em nosso banco");
        System.out.println("Sua agência :" + agencia + " conta : " + conta);
        System.out.println("Seu saldo R$" + saldo + " já está disponível para saque");

    }
}