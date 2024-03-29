/*
 * Flux
 * Copyright (C) 2009-2010 Informationsysteme Ralf Bensmann.
 * Copyright (C) 2011-2012 art of coding UG (haftungsbeschränkt).
 *
 * Alle Rechte vorbehalten. Nutzung unterliegt Lizenzbedingungen.
 * All rights reserved. Use is subject to license terms.
 */

package eu.artofcoding.flux.helper

/**
 * @author rbe
 */
final class StringHelper {

    /**
     * Count spaces at the beginning of a string.
     * @param what String to count.
     * @return int Number of leading spaces found.
     */
    public static int countSpacesAtBeginning(String what) {
        boolean charSeen = false
        int spaceCount = what.inject 0, { o, n ->
            if (!charSeen) {
                charSeen = n != ' '
            }
            if (!charSeen && n == ' ') {
                o + 1
            } else {
                o
            }
        }
    }

}
