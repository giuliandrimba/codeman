unless Object.keys
    Object.keys = (obj)->

        keys = []

        for k of obj
            if Object.prototype.hasOwnProperty.call obj, k
                keys.push k

        return keys