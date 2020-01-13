from graphene_mongo import MongoengineObjectType

from dynamicconsentprototype.models.consent import ConsentModel


class Consent(MongoengineObjectType):
    class Meta:
        model = ConsentModel
