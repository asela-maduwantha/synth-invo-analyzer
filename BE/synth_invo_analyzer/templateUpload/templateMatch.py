from .models import InvoiceFactors

class templateMatch:
    
    @staticmethod
    def templateMatchRouter(templateInvoiceType, templateInvoice):
        if templateInvoiceType == 'csv' :
            matchedFactors, misMatchedFactors = templateMatch.csvTemplateMatch(templateInvoice)
            return matchedFactors, misMatchedFactors
        
        if templateInvoiceType == 'xml' :
            templateMatch.xmlTemplateMatch(templateInvoice)
            
            
            
    @staticmethod
    def csvTemplateMatch(csvTemplateInvoice):
        templateRows = csvTemplateInvoice.strip().split('\n')
        templateFactors = templateRows[0].strip().split(',')
        
        matchedFactors, misMatchedFactors = templateMatch._matchFactors(templateFactors)
        
        
        return matchedFactors, misMatchedFactors
        
        
    
        
    def _matchFactors(templateFactors):
        
        matchedFactors = []
        misMatchedFactors = []
        
        for factor in templateFactors:
            try:
                result = InvoiceFactors.objects.get(synonym = factor)
                matchedFactor = result.common_factor
                matchedFactors.append(matchedFactor)
            except InvoiceFactors.DoesNotExist:
                
                misMatchedFactors.append(factor)
                
            
    
        return matchedFactors, misMatchedFactors
        
        