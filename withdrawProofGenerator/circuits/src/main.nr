use dep::std;

fn main(userSecretKey: Field, withdraw: Field, totalAllowance: Field, totalAllowanceHash: pub Field) -> pub Field {
//fn main(userSecretKey: Field, withdraw: Field) -> pub Field {

    let _totalAllowanceHash = std::hash::pedersen([totalAllowance, userSecretKey]);
    constrain _totalAllowanceHash[0] == totalAllowanceHash;

    let withdrawInt = withdraw as u24;
    let totalAllowanceInt = totalAllowance as u24;
    constrain withdrawInt < totalAllowanceInt;

    let withdrawed = std::hash::pedersen([withdraw, userSecretKey]);
    withdrawed[0]
}