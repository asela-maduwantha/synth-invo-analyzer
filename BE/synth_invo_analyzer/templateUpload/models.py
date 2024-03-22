from django.db import models
import uuid
from django_cassandra_engine.models import DjangoCassandraModel
from cassandra.cqlengine import columns


# Create your models here.
class InvoiceFactors(DjangoCassandraModel):
    factor_id = columns.UUID(primary_key = True, default = uuid.uuid4)
    synonym = columns.Text(primary_key = True)
    common_factor = columns.Text()
    
    class Meta:
        get_pk_field = 'factor_id'