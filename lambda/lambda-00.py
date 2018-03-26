def my_handler(event, context):
    message = 'Hello {} {}!'.format(event['firstname'],
                                    event['lastname'])
    return {
        'message': message
    }