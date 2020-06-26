package com.marino.loan.quote;

/**
 * Thrown when there is an insufficient amount of lenders for the loan amount requested
 */
public final class InsufficientLendersException extends Exception {
    public InsufficientLendersException() {
    }
}
