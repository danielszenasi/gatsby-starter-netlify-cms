module.exports = /* GraphQL */ `
  scalar JSON

  type Query {
    listings(neighborhoodId: ID, propertyTypeId: ID): [Listing!]!
    neighborhoods: [Neighborhood!]!
    propertyTypes: [PropertyType!]!
  }
  type Address {
  id: ID!
  number: String
  prefix: String
  street: String
  unit: String
  type: String
  city: String
  state: String
  zip: String
  latitude: Float
  longitude: Float
  display: String
}

type Listing {
  id: ID!
  description: String
  price: Float
   priceFormatted: String
  propertyType: PropertyType
  yearBuilt: Int
  address: Address
  building: Building
  neighborhood: Neighborhood
  images: JSON
  numberOfBathrooms: Float
  numberOfBedrooms: Int
  numberOfRooms: Float
}

type Building {
 id: ID!
 name: String!
}

type Neighborhood {
  id: ID!
  name: String!
}

type PropertyType {
  id: ID!
  name: String!
}
`;