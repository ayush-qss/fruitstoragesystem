/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Fruit: { // root type
    description?: string | null; // String
    limit?: number | null; // Int
    name?: string | null; // String
  }
  FruitFactory: { // root type
    description?: string | null; // String
    limit?: number | null; // Int
    name?: string | null; // String
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Fruit: { // field return type
    description: string | null; // String
    limit: number | null; // Int
    name: string | null; // String
  }
  FruitFactory: { // field return type
    description: string | null; // String
    limit: number | null; // Int
    name: string | null; // String
  }
  Mutation: { // field return type
    createFruitForFruitStorage: NexusGenRootTypes['FruitFactory']; // FruitFactory!
    deleteFruitFromFruitStorage: NexusGenRootTypes['FruitFactory']; // FruitFactory!
    findFruit: Array<NexusGenRootTypes['FruitFactory'] | null>; // [FruitFactory]!
  }
  Query: { // field return type
    findFruit: Array<NexusGenRootTypes['Fruit'] | null>; // [Fruit]!
  }
}

export interface NexusGenFieldTypeNames {
  Fruit: { // field return type name
    description: 'String'
    limit: 'Int'
    name: 'String'
  }
  FruitFactory: { // field return type name
    description: 'String'
    limit: 'Int'
    name: 'String'
  }
  Mutation: { // field return type name
    createFruitForFruitStorage: 'FruitFactory'
    deleteFruitFromFruitStorage: 'FruitFactory'
    findFruit: 'FruitFactory'
  }
  Query: { // field return type name
    findFruit: 'Fruit'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createFruitForFruitStorage: { // args
      description: string; // String!
      limit: number; // Int!
      name: string; // String!
    }
    deleteFruitFromFruitStorage: { // args
      forceDelete: boolean; // Boolean!
      name: string; // String!
    }
    findFruit: { // args
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}