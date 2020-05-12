describe('JavaFizzBuzz', function(){
    // method statement
    var javabuzz;
    beforeEach(function() {
      javabuzz = new JavaFizzBuzz();
    });
  
    describe('knows when the number is', function() {
        it('devisable by 3', function() {
            expect(javabuzz.isDivisibleByThree(3)).toBe(true);
        });

        it('divisible by 6', function() {
            expect(javabuzz.isDivisibleByThree(6)).toBe(true)
        });
    });

    describe('knows when number is NOT', function() {
      it('devisable by 1', function() {
          expect(javabuzz.isDivisibleByThree(1)).toBe(false);
      });

      it('devisable by 8', function() {
          expect(javabuzz.isDivisibleByFive(8)).toBe(false)
      });
    });

    describe('knows when number is devisable by 5', function() {
      it('devisable by 5', function() {
          expect(javabuzz.isDivisibleByFive(5)).toBe(true)
      });

      it('divisible by 10', function() {
          expect(javabuzz.isDivisibleByFive(10)).toBe(true)
      });
    });

    describe('knows when the number is divisible by 15', function() {
        it('divisible by 15', function() {
            expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)
        });

        it('divisible by 12', function() {
            expect(javabuzz.isDivisibleByFifteen(12)).toBe(false)
        });
    });

    describe('knows how to play JavaFizzBuzz', function() {
        it('returns Fizz if divisible by 3', function() {
            expect(javabuzz.play(3)).toBe('Fizz')
        });

        it('returns Buzz if divisible by 5', function() {
            expect(javabuzz.play(5)).toBe('Buzz')
        });

        it('returns FizzBuzz if divisible by 15', function() {
            expect(javabuzz.play(30)).toBe('FizzBuzz')
        });

        it('returns number if none of the above', function() {
            expect(javabuzz.play(2)).toBe(2)
        });
    });

});
