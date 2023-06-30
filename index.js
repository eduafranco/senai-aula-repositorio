const TransactionUseCase = (bankAccountPayer, bankAccountRecipient, value) => {
    bankAccountPayer.removeFromBalance(value)
    bankAccountRecipient.addToBalance(value)
}

export default TransactionUseCase
