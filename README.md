# Cyclotone
Calculator for factoring numbers of the form 10^n - 1.
Steps:
1. Factor 10^n - 1 into cyclotomic polynomials where x = 10.
2. Factor any square roots of perfect squares in 10^n - 1.
3. Find solutions to the following system of equations for each of the new numbers (k) where the number of the cyclotomic polynomial is l:
    (lx + 1)(ly + 1) = k
    mod(y,1) = 0
  given
    mod(x,1) = 0
    x >= 0
  Since 0l + 1 = 1, x = 0 is always a solution.
4. If no solutions exist where x > 0, then the number is prime. If a solution exists where x > 0, we factor lx + 1 out of that number, and repeat steps 3 & 4 for each new number until the last number is prime.

Example:
10^22 - 1:
1. 9 * 11111111111 * 11 * 9090909091
2. 3^2 * 11111111111 * 11^2 * 826446281
3. For 826446281: (1,1633293) is a solution, so the factorization becomes 3^2 * 11111111111 * 11^2 * 23 * 35932447.
4. For 35932447: (186,399) is a solution to factoring the new number, so the factorization becomes 3^2 * 11111111111 * 11^2 * 23 * 4093 * 8779.
5. For 11111111111: (1968,46658) is a solution, so the factorization becomes 3^2 * 21649 * 513239 * 11^2 * 23 * 4093 * 8779.
6. There are no more solutions, so the factorization ends at 3^2 * 11^2 * 23 * 4093 * 8779 * 21649 * 513239.
