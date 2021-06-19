/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayerCharacter = /* GraphQL */ `
  subscription OnCreatePlayerCharacter($owner: String!) {
    onCreatePlayerCharacter(owner: $owner) {
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
export const onUpdatePlayerCharacter = /* GraphQL */ `
  subscription OnUpdatePlayerCharacter($owner: String!) {
    onUpdatePlayerCharacter(owner: $owner) {
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
export const onDeletePlayerCharacter = /* GraphQL */ `
  subscription OnDeletePlayerCharacter($owner: String!) {
    onDeletePlayerCharacter(owner: $owner) {
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
export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty($owner: String!) {
    onCreateParty(owner: $owner) {
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty($owner: String!) {
    onUpdateParty(owner: $owner) {
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty($owner: String!) {
    onDeleteParty(owner: $owner) {
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
