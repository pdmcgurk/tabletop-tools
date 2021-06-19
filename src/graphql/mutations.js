/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayerCharacter = /* GraphQL */ `
  mutation CreatePlayerCharacter(
    $input: CreatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    createPlayerCharacter(input: $input, condition: $condition) {
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
export const updatePlayerCharacter = /* GraphQL */ `
  mutation UpdatePlayerCharacter(
    $input: UpdatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    updatePlayerCharacter(input: $input, condition: $condition) {
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
export const deletePlayerCharacter = /* GraphQL */ `
  mutation DeletePlayerCharacter(
    $input: DeletePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    deletePlayerCharacter(input: $input, condition: $condition) {
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
export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
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
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
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
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
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
