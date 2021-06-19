/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayerCharacter = /* GraphQL */ `
  query GetPlayerCharacter($id: ID!) {
    getPlayerCharacter(id: $id) {
      id
      partyID
      party {
        id
        name
        characters {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      levels
      classes
      strength
      constitution
      dexterity
      intelligence
      wisdom
      charisma
      maxHP
      armor_class
      initiative
      save_profs
      skill_profs
      skill_exps
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlayerCharacters = /* GraphQL */ `
  query ListPlayerCharacters(
    $filter: ModelPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        partyID
        party {
          id
          name
          createdAt
          updatedAt
          owner
        }
        name
        levels
        classes
        strength
        constitution
        dexterity
        intelligence
        wisdom
        charisma
        maxHP
        armor_class
        initiative
        save_profs
        skill_profs
        skill_exps
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      id
      name
      characters {
        items {
          id
          partyID
          name
          levels
          classes
          strength
          constitution
          dexterity
          intelligence
          wisdom
          charisma
          maxHP
          armor_class
          initiative
          save_profs
          skill_profs
          skill_exps
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPartys = /* GraphQL */ `
  query ListPartys(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        characters {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
