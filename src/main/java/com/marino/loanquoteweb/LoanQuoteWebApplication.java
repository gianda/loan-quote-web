package com.marino.loanquoteweb;

import com.marino.loan.quote.LoanQuote;
import com.marino.loan.quote.LoanQuoteApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class LoanQuoteWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoanQuoteWebApplication.class, args);
	}

	@GetMapping("/loanquote")
	public LoanQuote getQuote(@RequestParam(value = "loanamount", defaultValue = "0") String loanAmount) {
		LoanQuote quote = LoanQuoteApplication.getLoanQuote(loanAmount);
		return quote;
	}

}
