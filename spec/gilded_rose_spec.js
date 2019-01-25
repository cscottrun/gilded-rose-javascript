describe("Gilded Rose", function() {

  it("Build Items list", function() {
    expect(items.length).toBe(6)
  });
  it("check list", function() {
    expect(items[1].name).toBe('Aged Brie')
  });

});

describe("Decrement sell_in", function() {
  let vest = items[0]
  let brie = items[1]
  let elixir = items[2]
  let sulfuras = items[3]
  let tickets = items[4]
  let cake = items[5]

  it("reduce sell_in value by 1", function() {
    expect(brie.sell_in).toBe(2)

    update_quality(); //1

    expect(vest.sell_in).toBe(9)
    expect(brie.sell_in).toBe(1)
    expect(elixir.sell_in).toBe(4)
    expect(sulfuras.sell_in).toBe(0)
    expect(tickets.sell_in).toBe(14)
    expect(cake.sell_in).toBe(2)

  });

});

describe("Decrement value", function() {
  
  it("reduce quality according to rules", function() {
  
    expect(vest.quality).toBe(19)
    expect(brie.quality).toBe(1)
    expect(elixir.quality).toBe(6)
    expect(sulfuras.quality).toBe(80)
    expect(tickets.quality).toBe(21)
    expect(cake.quality).toBe(5)

  });
});

describe("Check Value change for exceptional items", function() {
  
  update_quality(); //2
  // update_quality(); //3
  // update_quality(); //4
  // update_quality(); //5

  it("reduce quality according to special rules", function() {
    expect(tickets.sell_in).toBe(13)
    //expect(tickets.quality).toBe(21)



  });
});

// describe("Check that quality is not negative", function() {
//   let vest = items[0]
//   let brie = items[1]
//   let elixir = items[2]
//   let sulfuras = items[3]
//   let tickets = items[4]
//   let cake = items[5]

//   it("quality is never negative", function() {
//     expect().toBe()


//   });
// });




